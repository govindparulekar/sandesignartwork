import styles from '../styles/Header.module.css'
export default function Header() {
    return (
        <header id={styles.header}>
            <div id={styles.brand_nav_cont}>

                <div id={styles.branding}>Sunny Ghag</div>

                <nav id={styles.main_nav}>
                    <ul>
                        <li class={styles.nav_item}><a href="#">Home</a></li>
                        <li class={styles.nav_item}><a href="#">Gallery</a></li>
                        <li class={styles.nav_item}><a href="#">About</a></li>
                        <li class={styles.nav_item}><a href="#">Contact</a></li>
                    </ul>
                </nav>  

            </div>
            <div id={styles.insta}><i class="fa-brands fa-instagram fa-xl"></i></div>
        </header>
    );
}