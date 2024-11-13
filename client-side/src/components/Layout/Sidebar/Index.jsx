import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    FiBarChart2 as PresentationChartBarIcon,
    FiShoppingBag as ShoppingBagIcon,
    FiUser as UserCircleIcon,
    FiSettings as Cog6ToothIcon,
    FiInbox as InboxIcon,
    FiPower as PowerIcon,
  } from "react-icons/fi";
  import { NavLink } from "react-router-dom";
  
  export default function Sidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Admin Side
          </Typography>
        </div>
        <List>
          <ListItem>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/ecommerce"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              E-Commerce
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-800"
                }`
              }
            >
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </NavLink>
          </ListItem>
        </List>
      </Card>
    );
  }
  