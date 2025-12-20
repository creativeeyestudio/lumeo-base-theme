import React from 'react'
import NavigationProps from './Navigation.interface'

const Navigation: React.FC<NavigationProps> = ({ menus, menuId }: NavigationProps) => {
    const menu = menus.find((m) => m.menuId === menuId);

    return (<></>)
}

export default Navigation