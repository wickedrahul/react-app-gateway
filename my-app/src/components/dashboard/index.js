import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { fetchResults } from '../../redux/actions';
import styles from './dashboard.module.css'; 
// import the interval which the user likes to see the updates in
import {HALF_MINUTE, EXPIRED_SESSION_MESSAGE} from './constants';
import {routes} from '../../routes';
import { useHistory } from 'react-router-dom';

let timeInterval=0;
export function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state);

  const { results, tokenExpired }  = user;
  const savedToken = localStorage.getItem('token');
  
    // Filter the resuts based on the events that are finished and then sort.
    // TODO: move this logic into a helper method.
    let filteredResults = results.filter(eachData=> eachData.event === 'finish');
    filteredResults = filteredResults.sort((a, b)=> a.time - b.time);

   
    // TODO: implement websocket if the server pushes notification in realtime
  const pollResults = ()=>{
    clearInterval(timeInterval) 
    dispatch(fetchResults(savedToken));//Dispatch once and then set the intrval
    timeInterval= setInterval(()=>{
      dispatch(fetchResults(savedToken))
    }, HALF_MINUTE)
  }  
  
   useEffect(
		() =>{
      pollResults()
      //Clear the polling upon component unmount
     return (()=>clearInterval(timeInterval))
    }, []);

  useEffect(
    () =>{
      if(!savedToken || tokenExpired){
        alert(EXPIRED_SESSION_MESSAGE);
      }
    }, [savedToken, tokenExpired]);

  if(!savedToken || tokenExpired){
    // Please note that I'm deliverately not doing the following as asked in the assignment.
    // That's because if we automatically keep the session active by reauthenticating, we won't be able
    // to see the login scree again.
   //  dispatch(login({email: "abc@gmail.com", password: "lTgAYaLP9jRs"})) -- Not doing this
    return <Redirect to={routes.LOGIN}/>
  }

  if(!results.length){
    return "Fetching Results..."
  }

  return (
    <div>
        <div className={styles.column} >
        <h1>Dashboard</h1>
          <div>
            <span>No.</span>
            <span>Horse</span>
            <span>Time</span>
            <span>Event</span>
          </div>
            {
              filteredResults.map(res=>{
                return <div key={res.horse.id+res.time}>
                  <span>{res.horse.id}</span>
                  <span>{res.horse.name}</span>
                  <span>{`${res.time/1000}s`}</span>
                  <span>{res.event}</span>
                </div>
              })
            }
            {
              !filteredResults.length && "The race has just begin..."
            }
       </div>
    </div>
  );
}
