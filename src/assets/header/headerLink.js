/*eslint-disable*/
// react components for routing our app without refresh
import React from "react"
import window from "global"
import { Link } from "gatsby"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home"
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects"
import SubjectIcon from "@material-ui/icons/Subject"
import PeopleIcon from "@material-ui/icons/People"
import AccountTreeIcon from "@material-ui/icons/AccountTree"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"

// core components
import Button from "../customButton/button"

import styles from "./headerLink.styles"

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" color="transparent" className={classes.navLink}>
          <HomeIcon className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" color="transparent" className={classes.navLink}>
          <EmojiObjectsIcon className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/achievements"
          color="transparent"
          className={classes.navLink}
        >
          <SubjectIcon className={classes.icons} /> Achievements
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/members" color="transparent" className={classes.navLink}>
          <PeopleIcon className={classes.icons} /> Members
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/projects"
          color="transparent"
          className={classes.navLink}
        >
          <AccountTreeIcon className={classes.icons} /> Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <TwitterIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <FacebookIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com"
            target="_blank"
            className={classes.navLink}
          >
            <InstagramIcon />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}
