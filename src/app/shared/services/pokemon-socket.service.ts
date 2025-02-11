import { Injectable } from "@angular/core";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({ providedIn: 'root' })
export class PokemonWebSocketService {
    private socket$!: WebSocketSubject<any>;

    connect(url: string) {
        this.socket$ = webSocket(url);
    }

    sendMessage(message: any) {
        if (this.socket$) {
            this.socket$.next(message);
        }
    }

    close() {
        if (this.socket$) {
            this.socket$.complete();
        }
    }
}
