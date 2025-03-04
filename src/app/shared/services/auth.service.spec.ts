import { HttpResponse, HttpStatusCode } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { CommonTesting } from "src/app/common/constants";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
	let service: AuthService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthService, ...(CommonTesting.providers || []), provideHttpClientTesting()],
		});

		service = TestBed.inject(AuthService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		service.reset();
		httpMock.verify();
	});

	it("Deve conseguir cadastrar um usuário e setar um token", () => {
		const mockUser = { email: "test@example.com", password: "123456" };
		const expectedResponse = { id: "id_test", token: "token123" };

		service.signUp(mockUser).subscribe((response) => {
			expect(response.body).toEqual(expectedResponse);
		});

		const req = httpMock.expectOne(`${service.SERVER_URL}/signup`);
		expect(req.request.method).toBe("POST");
		req.flush(expectedResponse, { status: 201, statusText: "Created" });
	});

	// it('Deve conseguir logar um usuário e setar um token', () => {
	// 	const mockUser = { email: 'test@example.com', password: '123456' };
	//     const expectedResponse = { message: "Login bem sucedido", data: undefined };

	//     service.login(mockUser).subscribe(response => {
	//         expect(response.body).toEqual(expectedResponse);
	//     });

	//     const req = httpMock.expectOne(`${service.SERVER_URL}/login`);
	//     expect(req.request.method).toBe('POST');
	//     req.flush(expectedResponse);
	// })

	it("Deve conseguir recuperar o header", () => {
		const mockToken = "Token123";
		const mockHeaders = { Authorization: mockToken }

		const mockResponse = {
			success: true,
			data: "test data",
		};
		// `${service.SERVER_URL}/signup`;

		// Espere pela requisição HTTP
		const response$ = new HttpResponse({
			body: mockResponse,
			status: HttpStatusCode.NoContent,
			headers: mockHeaders as any,
		});

		service.setAuthToken(response$);

   		 // Verifique se o valor foi emitido corretamente no BehaviorSubject
		expect(service.isLogged$.getValue()).toBeTrue();
		expect(service.getAuthorizationHeader()).toEqual(mockToken);
	});

	it("Deve não setar um token para uma falha no login", () => {
		const mockUser = { email: "test@example.com", password: "123456" };
		const expectedResponse = { message: "Falha no login", data: undefined };

		service.login(mockUser).subscribe({
			next: () => fail("Deveria ter retornado um erro 401, mas retornou"),
			error: (err) => {
				expect(err.status).toBe(401);
				expect(err.statusText).toBe("Unauthorized")
			}
		});
		// expect(response.body).toEqual(expectedResponse);

		const req = httpMock.expectOne(`${service.SERVER_URL}/login`);
		expect(req.request.method).toBe("POST");

		req.flush(expectedResponse, { status: 401, statusText: "Unauthorized" });

		expect(service.isLogged$.getValue()).toBeFalse();
		expect(service.getAuthorizationHeader()).toBeFalsy();
	});
});
