import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../assets/header/header.component"
import HeaderLinks from "../assets/header/headerLink"

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}))

const dashboardRoutes = []

const NavBar = () => {
  const classes = useStyles()
  return (
    <div>
      <Header
        brand="Open Source Lab"
        rightLinks={<HeaderLinks />}
        routes={dashboardRoutes}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <div className={classes.drawerHeader} />
    </div>
  )
}

export default NavBar
