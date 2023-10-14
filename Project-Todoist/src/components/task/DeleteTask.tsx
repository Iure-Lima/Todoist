import "../../assets/tags&task_style/delete.css"
import "../../assets/btnCancel/btnCancel.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Task{
  task_id:number
  content: string
  due_date: string
  priority: string
  is_completed: boolean
  title: string
  tag_id: number
  user_id: number
  created_at: string
}

function DeleteTask(){
  const [nameTask, setNameTask] = useState("");

  const { taskId } = useParams();

  const onCancel = () =>{
    window.location.href = "/dashboardTasks";
  }

  useEffect(() =>{
    const getTask = async () =>{
      const res = await axios.get<Task>(`https://to-do-list-backend-qijk.onrender.com/tasks/${taskId}`,
      { headers: 
        {
        Authorization: `Bearer ${getTokenFromMemory()}`,
        },
      })
      setNameTask(res.data.title)
    }
    getTask();
  },[])

  function getTokenFromMemory(): string | null {
    return localStorage.getItem("token");
  }

  const deleteTask = async () =>{
    const res = await axios.delete(`https://to-do-list-backend-qijk.onrender.com/tasks/${taskId}`,
    { headers: 
      {
      Authorization: `Bearer ${getTokenFromMemory()}`,
      },
    })

    if (res.status == 200){window.location.href = "/dashboardTasks"}
  }


  return(
    <>
      <Header></Header>
      <Menu></Menu>
      <section id="deleteContainer">
        <span> 
          <a href="/">
          <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_38_233)">
<path d="M25.5 9.18918L8.5 27.5676" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 9.18918L25.5 27.5676" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_38_233">
<rect width="34" height="36.7568" fill="white"/>
</clipPath>
</defs>
          </svg>
          </a>
        </span>

        <p>Tem certeza que deseja deletar <strong>{nameTask}</strong>?</p>

        <div id="btnsDelete">
          <button id="btnCancel" onClick={onCancel}>Cancelar</button>
          <button id="delete" onClick={deleteTask}>
            Deletar
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2047 15.5H5.05358C4.64825 15.5 4.25951 15.342 3.97289 15.0607C3.68627 14.7794 3.52525 14.3978 3.52525 14V4.5C3.52525 4.36739 3.57893 4.24022 3.67447 4.14645C3.77001 4.05268 3.89958 4 4.0347 4C4.16981 4 4.29939 4.05268 4.39493 4.14645C4.49047 4.24022 4.54414 4.36739 4.54414 4.5V14C4.54414 14.1326 4.59781 14.2598 4.69335 14.3536C4.78889 14.4473 4.91847 14.5 5.05358 14.5H13.2047C13.3398 14.5 13.4694 14.4473 13.5649 14.3536C13.6605 14.2598 13.7141 14.1326 13.7141 14V4.5C13.7141 4.36739 13.7678 4.24022 13.8633 4.14645C13.9589 4.05268 14.0885 4 14.2236 4C14.3587 4 14.4883 4.05268 14.5838 4.14645C14.6793 4.24022 14.733 4.36739 14.733 4.5V14C14.733 14.3978 14.572 14.7794 14.2854 15.0607C13.9988 15.342 13.61 15.5 13.2047 15.5Z" fill="white"/>
<path d="M15.2425 3.5H3.01581C2.88069 3.5 2.75111 3.44732 2.65558 3.35355C2.56004 3.25979 2.50636 3.13261 2.50636 3C2.50636 2.86739 2.56004 2.74021 2.65558 2.64645C2.75111 2.55268 2.88069 2.5 3.01581 2.5H15.2425C15.3776 2.5 15.5071 2.55268 15.6027 2.64645C15.6982 2.74021 15.7519 2.86739 15.7519 3C15.7519 3.13261 15.6982 3.25979 15.6027 3.35355C15.5071 3.44732 15.3776 3.5 15.2425 3.5Z" fill="white"/>
<path d="M11.1669 3.5C11.0318 3.5 10.9022 3.44732 10.8067 3.35355C10.7111 3.25979 10.6575 3.13261 10.6575 3V1.5H7.6008V3C7.6008 3.13261 7.54712 3.25979 7.45158 3.35355C7.35604 3.44732 7.22647 3.5 7.09135 3.5C6.95624 3.5 6.82666 3.44732 6.73112 3.35355C6.63558 3.25979 6.58191 3.13261 6.58191 3V1C6.58191 0.867392 6.63558 0.740215 6.73112 0.646447C6.82666 0.552678 6.95624 0.5 7.09135 0.5H11.1669C11.302 0.5 11.4316 0.552678 11.5271 0.646447C11.6227 0.740215 11.6763 0.867392 11.6763 1V3C11.6763 3.13261 11.6227 3.25979 11.5271 3.35355C11.4316 3.44732 11.302 3.5 11.1669 3.5Z" fill="white"/>
<path d="M9.12913 13C8.99402 13 8.86444 12.9473 8.7689 12.8536C8.67336 12.7598 8.61969 12.6326 8.61969 12.5V5.5C8.61969 5.36739 8.67336 5.24021 8.7689 5.14645C8.86444 5.05268 8.99402 5 9.12913 5C9.26425 5 9.39383 5.05268 9.48937 5.14645C9.5849 5.24021 9.63858 5.36739 9.63858 5.5V12.5C9.63858 12.6326 9.5849 12.7598 9.48937 12.8536C9.39383 12.9473 9.26425 13 9.12913 13Z" fill="white"/>
<path d="M11.6763 12C11.5412 12 11.4117 11.9473 11.3161 11.8536C11.2206 11.7598 11.1669 11.6326 11.1669 11.5V6.5C11.1669 6.36739 11.2206 6.24021 11.3161 6.14645C11.4117 6.05268 11.5412 6 11.6763 6C11.8115 6 11.941 6.05268 12.0366 6.14645C12.1321 6.24021 12.1858 6.36739 12.1858 6.5V11.5C12.1858 11.6326 12.1321 11.7598 12.0366 11.8536C11.941 11.9473 11.8115 12 11.6763 12Z" fill="white"/>
<path d="M6.58191 12C6.44679 12 6.31722 11.9473 6.22168 11.8536C6.12614 11.7598 6.07246 11.6326 6.07246 11.5V6.5C6.07246 6.36739 6.12614 6.24021 6.22168 6.14645C6.31722 6.05268 6.44679 6 6.58191 6C6.71702 6 6.8466 6.05268 6.94214 6.14645C7.03768 6.24021 7.09135 6.36739 7.09135 6.5V11.5C7.09135 11.6326 7.03768 11.7598 6.94214 11.8536C6.8466 11.9473 6.71702 12 6.58191 12Z" fill="white"/>
            </svg>

          </button>

        </div>

      </section>
    </>
  )
}

export default DeleteTask