import { MenuItem } from "primeng/api";

export const MenuItems: MenuItem[] = [
    {
        label: 'Boxes',
        icon: 'pokeball-icon',
        routerLink: ['/boxes']
    },
    {
        label: 'Itens',
        icon: 'pi pi-shopping-cart', // https://icons8.com
        routerLink: ['/items']
    },
    {
        label: 'Equipes',
        icon: 'pi pi-group',
        routerLink: ['/teams']
    },
    {
        label: 'Catálogo',
        icon: 'pi pi-file-excel',
        items: [
            {
                label: 'Pokedex',
                icon: 'pi pi-database',
                routerLink: ['/pokedex']
            },
            {
                label: 'Items',
                icon: 'pi pi-barcode',
                routerLink: ['/items']
            }
        ]
    },
]