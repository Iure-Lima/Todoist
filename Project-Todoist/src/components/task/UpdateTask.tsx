import { useEffect, useState } from "react"
import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"
import { useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"

type Inputs = {
  content: string
  due_date: string
  priority: string
  title: string
  tag_id: number
}

interface Task{
  content: string
  due_date: string
  priority: string
  is_complete: boolean
  title: string
  tag_id: number
  user_id: number
  created_at: string
  task_id: number
}

interface Tag{
  tag_id: number
  user_id: number
  name: string
  color: string
}

function UpdateTask(){
  const [task, setTask] = useState<Task | undefined>();

  const { taskId } = useParams();

  const [tags, setTag] = useState<Tag[]>([]);
  
  useEffect(() =>{
    const getTask = async () =>{
      const res = await axios.get<Task>(`https://to-do-list-backend-qijk.onrender.com/tasks/${taskId}`,{ headers: {
        Authorization: `Bearer ${getTokenFromMemory()}`,
      },})
      setTask(res.data)

      setValue("title",res.data.title);
      setValue("content", res.data.content);
      setValue("priority", res.data.priority);
      setValue("tag_id", res.data.tag_id);
      setValue("due_date", res.data.due_date.substring(0,10));
    }
    getTask();

    const getTag = async () =>{
      const res = await axios.get<Tag[]>(`https://to-do-list-backend-qijk.onrender.com/tags`,{ headers: {
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
  

  const onCancel = () =>{
    window.location.href = "/dashboardTasks";
  }

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.title == null){
      return
    }
    
    const updateData = {
      content: data.content || task?.content,
      due_date: data.due_date || task?.due_date.substring(0,10),
      priority: data.priority || task?.priority,
      title: data.title || task?.title,
      tag_id: Number(data.tag_id) || task?.tag_id
    }

    const res = await axios.put(`https://to-do-list-backend-qijk.onrender.com/tasks/${taskId}`,updateData,{
      headers: {
        Authorization: `Bearer ${getTokenFromMemory()}`,
      },
    })
    console.log(res)
    console.log(updateData)

    // if (res.status == 200){window.location.href = "/dashboardTasks";}

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
                <input type="date" id="data" required {...register("due_date")} />
              </div>

              <div className="field">
                <label>Prioridade</label>
                <select id="prioridade" {...register("priority")} >
                  <option value="Very High" style={{color:"#FE6F65"}}>Very High</option>
                  <option value="High" style={{color:"#F79513"}}>High</option>
                  <option value="Moderate" style={{color:"#5196FE"}}>Moderate</option>
                  <option value="Low" style={{color:"#9A9EA4"}}>Low</option>

                </select>
              </div>

              <div className="field">
                <label>Tag</label>
                <select id="dropTag" {...register("tag_id")}>
                  <option value="0" selected disabled >Tags</option>
                  {renderTags(tags)}
                </select>
              </div>

            </div>
            <div className="form-group btns">
              <button id="btnCancel" onClick={onCancel}>Cancelar</button>
              <button id="send" style={{width: "103px"}} onSubmit={handleSubmit(onSubmit)}>Salvar</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default UpdateTask