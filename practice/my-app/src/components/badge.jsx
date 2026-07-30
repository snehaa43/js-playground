function badge({text,bgcolour}){
    return(
        <span className="badge" style={{ backgroundColor: bgcolour }}>
            {text}
        </span>
    );  

}
export default badge;