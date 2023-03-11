import styles from '../styles/Main.module.css'


export default function Main() {
    return(
        <>
        <div id={styles.intro_section}>
            <div id={styles.heading}>
                when an unknown printer took a galley of type an
            </div>

            <div id={styles.desc}>
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letr
            </div>
        </div>

        <div id={styles.demo_work}>
            <div id={styles.row}>

                <div class={styles.col}>
                    <img src="/images/img1.jpg"></img>
                    <img src="/images/img7.jpg"></img>
                    <img src="/images/img3.jpg"></img>
                    <img src="/images/img4.jpg"></img>
                    <img src="/images/img5.jpg"></img>
                </div>

                <div class={styles.col}>
                    <img src="/images/img8.jpg"></img>
                    <img src="/images/img2.jpg"></img>
                    <img src="/images/img6.jpg"></img>
                    <img src="/images/img12.jpg"></img>
                    <img src="/images/img15.jpg"></img>

                </div>

                <div class={styles.col}>
                    <img src="/images/img11.jpg"></img>
                    <img src="/images/img9.jpg"></img>
                    <img src="/images/img13.jpg"></img>
                    <img src="/images/img14.jpg"></img>
                </div>

            </div>

            
            <a class="page_btn" id={styles.gallery_btn} href='#'>
                See my work
            </a>
            
        </div>

        </>
    );
}
