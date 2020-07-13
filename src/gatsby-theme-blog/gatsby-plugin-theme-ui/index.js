import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`
const background = `#EDEDED`
const db = `#777777`

export default merge(defaultThemeColors,{
    colors: {
        text: blueGray,
        primary: darkBlue,
        heading: blueGray,
        background:background,
        dark:{
            text: lightBlue,
            primary: darkBlue,
            heading: blueGray,
            background:db,
        }
    },
})
