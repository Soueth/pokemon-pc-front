import { MenuItem } from "primeng/api";
import { ICON_PATH } from "src/app/common/constants";

export const MenuItems: MenuItem[] = [
    {
        label: 'Boxes',
        icon: 'iconoirComputer',
        routerLink: ['/boxes']
    },
    {
        label: 'Itens',
        // icon: 'potion_icon', // https://icons8.com
        routerLink: ['/items'],
        path: `${ICON_PATH}/potion.png`
    },
    {
        label: 'Times',
        icon: 'iconoirPokeball',
        routerLink: ['/teams']
    },
    {
        label: 'Catálogo',
        icon: 'iconoirSmartphoneDevice', // iconoirSmartphoneDevice
        items: [
            {
                label: 'Pokedex',
                icon: 'iconoirSmartphoneDevice',
                routerLink: ['/pokedex']
            },
            {
                label: 'Items',
                icon: 'iconoirSmartphoneDevice',
                routerLink: ['/items']
            }
        ]
    },
]