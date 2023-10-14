import { SubmitHandler, useForm } from "react-hook-form"
import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"
import axios from "axios"
import { useEffect, useState } from "react"

type Inputs = {
  content: string
  due_date: string
  priority: string
  is_complete: boolean
  title: string
  tag_id: number
}

interface Tag{
  tag_id: number
  user_id: number
  name: string
  color: string
}

function CreateTask(){

  const [tags, setTag] = useState<Tag[]>([]);
  
  useEffect(() =>{
    const getTag = async () =>{
      const res = await axios.get<Tag[]>(`https://to-do-list-backend-qijk.onrender.com/tags`, { headers: {
        Authorization: `Bearer ${getTokenFromMemory()}`,
      },})
      setTag(res.data)
    }
    getTag();
  },[])

  const renderTags = (data:Tag[]) => {
    return data.map((value) => {
      return (
        <option value={value.tag_id}>{value.name}</option>
      )
    })
  };


  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.title == null){
      return
    }

    const res = await axios.post('https://to-do-list-backend-qijk.onrender.com/tasks',{
      content: data.content,
      due_date: data.due_date,
      priority: data.priority,
      is_complete: false,
      title: data.title,
      tag_id: data.tag_id
    }, { 
      headers: {
        Authorization: `Bearer ${getTokenFromMemory()}`,
      },
    })

    console.log(res)

    if (res.status == 201){window.location.href = "/dashboardTasks";}

  } 

  const onCancel = () =>{
    window.location.href = "/dashboardTasks";
  }

  function getTokenFromMemory(): string | null {
    return localStorage.getItem("token");
  }

  return(
    <>
      <Header></Header>
      <Menu></Menu>

      <div id="container">
        <section className="content task">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nome da Task</label>
              <input type="text" id="nomeTask" placeholder="Nome da Task" required {...register("title")}/>
            </div>
            <div className="form-group">
              <label>Descrição da Task</label>
              <textarea id="description" placeholder="Descrição" {...register("content")}/>
            </div>
            <div className="form-group multi-fields">
              <div className="field">
                <label>Data</label>
                <input type="date" id="data" required {...register("due_date")}/>
              </div>

              <div className="field">
                <label>Prioridade</label>
                <select id="prioridade" {...register("priority")}>
                  <option value="Very High" style={{color:"#FE6F65"}}>Very High</option>
                  <option value="High" style={{color:"#F79513"}}>High</option>
                  <option value="Moderate" style={{color:"#5196FE"}}>Moderate</option>
                  <option value="Low" selected style={{color:"#9A9EA4"}}>Low</option>

                </select>
              </div>

              <div className="field">
                <label>Tag</label>
                
                <select id="dropTag"  {...register("tag_id")}>
                  <option value="0" selected disabled >Tags</option>
                  {renderTags(tags)}

                </select>
              </div>

            </div>
            <div className="form-group btns">
              <button id="btnCancel" onClick={onCancel}>Cancelar</button>
              <button id="send" onSubmit={handleSubmit(onSubmit)}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_54_248)">
<path d="M15.0855 29.289L17.8964 19.1066L32.9069 18.3206L15.0855 29.289ZM13.9614 7.83163L32.8313 16.8785L17.8209 17.6644L13.9614 7.83163ZM12.9302 5.73692C12.3385 5.45294 11.7065 6.04039 11.9452 6.65175L16.5797 18.4536L13.2047 30.6743C13.0302 31.3063 13.7211 31.8254 14.2799 31.4811L36.0773 18.0654C36.5627 17.7659 36.5261 17.0468 36.0099 16.7998L12.9302 5.73692Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_54_248">
<rect width="26" height="26" fill="white" transform="translate(17.3974) rotate(42)"/>
</clipPath>
</defs>
                </svg>
              </button>
            </div>



          </form>
        </section>
      </div>
    
    </>
  )
}

export default CreateTask