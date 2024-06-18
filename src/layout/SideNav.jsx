import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { navigations } from '../navigation';
import { ListItemIcon } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

export const SideNav = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleChildrenOpen = (name) => {
        setSelectedItem((prev) => (prev === name ? '' : name));
    };

    const renderItems = navigations.map((item) => {
        if (item.path) {
            return (
                <ListItemButton
                    key={item.name}
                    onClick={() => navigateTo(item.path)}
                    selected={item.path === pathname}
                >
                    {item.name}
                </ListItemButton>
            );
        }

        if (item.children) {
            return (
                <>
                    <ListItemButton
                        onClick={() => handleChildrenOpen(item.name)}
                    >
                        <ListItemText>{item.name}</ListItemText>
                        <ListItemIcon>
                            <ExpandLess />
                        </ListItemIcon>
                    </ListItemButton>

                    <Collapse
                        in={selectedItem === item.name}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            {item.children.map((child) => {
                                return (
                                    <ListItemButton
                                        key={child.name}
                                        sx={{ pl: 4 }}
                                        onClick={() => navigateTo(child.path)}
                                        selected={child.path === pathname}
                                    >
                                        {child.name}
                                    </ListItemButton>
                                );
                            })}
                        </List>
                    </Collapse>
                </>
            );
        }

        return <ListItemText>{item.name}</ListItemText>;
    });
    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: 'background.paper'
                }
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <img
                    src="https://primefreshlimited.com/wp-content/uploads/2024/05/Prime-Fresh-Logo-tm.png"
                    style={{ width: '100px', height: '50px' }}
                    alt=""
                />
            </Toolbar>
            <List>{renderItems}</List>
        </Drawer>
    );
};
