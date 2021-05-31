import React from "react";

import styles from "./footer.module.css"
import titles from "../../modules/titles.module.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className={styles.social_networks}>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30px" height="30px">
                    <path d="M26.070313 3.996094C25.734375 4.011719 25.417969 4.109375 25.136719 4.21875L25.132813 4.21875C24.847656 4.332031 23.492188 4.902344 21.433594 5.765625C19.375 6.632813 16.703125 7.757813 14.050781 8.875C8.753906 11.105469 3.546875 13.300781 3.546875 13.300781L3.609375 13.277344C3.609375 13.277344 3.25 13.394531 2.875 13.652344C2.683594 13.777344 2.472656 13.949219 2.289063 14.21875C2.105469 14.488281 1.957031 14.902344 2.011719 15.328125C2.101563 16.050781 2.570313 16.484375 2.90625 16.722656C3.246094 16.964844 3.570313 17.078125 3.570313 17.078125L3.578125 17.078125L8.460938 18.722656C8.679688 19.425781 9.949219 23.597656 10.253906 24.558594C10.433594 25.132813 10.609375 25.492188 10.828125 25.765625C10.933594 25.90625 11.058594 26.023438 11.207031 26.117188C11.265625 26.152344 11.328125 26.179688 11.390625 26.203125C11.410156 26.214844 11.429688 26.21875 11.453125 26.222656L11.402344 26.210938C11.417969 26.214844 11.429688 26.226563 11.441406 26.230469C11.480469 26.242188 11.507813 26.246094 11.558594 26.253906C12.332031 26.488281 12.953125 26.007813 12.953125 26.007813L12.988281 25.980469L15.871094 23.355469L20.703125 27.0625L20.8125 27.109375C21.820313 27.550781 22.839844 27.304688 23.378906 26.871094C23.921875 26.433594 24.132813 25.875 24.132813 25.875L24.167969 25.785156L27.902344 6.65625C28.007813 6.183594 28.035156 5.742188 27.917969 5.3125C27.800781 4.882813 27.5 4.480469 27.136719 4.265625C26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875C25.964844 6.109375 25.976563 6.101563 25.949219 6.222656L25.949219 6.234375L22.25 25.164063C22.234375 25.191406 22.207031 25.25 22.132813 25.308594C22.054688 25.371094 21.992188 25.410156 21.667969 25.28125L15.757813 20.75L12.1875 24.003906L12.9375 19.214844C12.9375 19.214844 22.195313 10.585938 22.59375 10.214844C22.992188 9.84375 22.859375 9.765625 22.859375 9.765625C22.886719 9.3125 22.257813 9.632813 22.257813 9.632813L10.082031 17.175781L10.078125 17.15625L4.242188 15.191406L4.242188 15.1875C4.238281 15.1875 4.230469 15.183594 4.226563 15.183594C4.230469 15.183594 4.257813 15.171875 4.257813 15.171875L4.289063 15.15625L4.320313 15.144531C4.320313 15.144531 9.53125 12.949219 14.828125 10.71875C17.480469 9.601563 20.152344 8.476563 22.207031 7.609375C24.261719 6.746094 25.78125 6.113281 25.867188 6.078125C25.949219 6.046875 25.910156 6.046875 25.96875 6.046875Z" fill="#FFFFFF" />
                </svg></a>
                <a href="#"><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"/></svg></a>
            </div>
            <div className={titles.footer_title}>GLHF</div>
        </footer>
    )
}
