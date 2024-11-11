import  { Audio } from 'react-loader-spinner'

const Loader =()=>{
return <div className="loader">
            <Audio height="80" width="80" color="blue" ariaLabel="loading"/>
    </div>
}
export default Loader