import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTeamsData } from '../../../redux/action/Action'

const Teams = () => {
  const dispatch = useDispatch()
  const getStateTeamsData = useSelector((state)=> state.Reducer.teamsData)

  console.log("getStateTeamsData",getStateTeamsData);

  useEffect(()=>{
dispatch(GetTeamsData())
  },[])
  return (
    <div style={{minHeight:"100vh"}}>
      {getStateTeamsData?.map((data,index)=>{
        return (
          <React.Fragment key={index}>
            <div>
            {data?.name}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
} 

export default Teams