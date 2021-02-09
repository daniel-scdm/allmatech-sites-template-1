import styles from 'src/styles/Home.module.css';
import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

export default function Home() {
  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}        
      />
      <div className={styles.container}>
        
      </div>
    </>    
  )
}
