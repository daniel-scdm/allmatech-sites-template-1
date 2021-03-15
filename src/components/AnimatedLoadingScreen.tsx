import Animation from "src/styles/Animation.module.css";


const AnimatedLoadingScreen : React.FC = () => {
    return (
        <div className={Animation.loading}>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
          <div className={Animation.obj}></div>
        </div>
    )
}

export default AnimatedLoadingScreen;