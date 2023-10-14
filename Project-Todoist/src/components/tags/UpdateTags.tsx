import axios from "axios"
import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"
import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

interface Tag{
  tag_id: number
  user_id: number
  name: string
  color: string
}

type Inputs = {
  nameTag: string
  color: string
}



function UpdateTags(){
  const [tag, setTag] = useState<Tag | undefined>();

  const { tagId } = useParams();

  const onCancel = () =>{
    window.location.href = "/dashboardTags";
  }

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.nameTag == null && data.color == null){
      return
    }

    const updatedData = {
      name: data.nameTag || tag?.name,
      color: data.color || tag?.color, 
    };

    const res = await axios.put(`https://to-do-list-backend-qijk.onrender.com/tags/${tagId}`,
    updatedData,
    { headers: {
      Authorization: `Bearer ${getTokenFromMemory()}`,
    },})

    if (res.status == 200){window.location.href = "/dashboardTags";}

  }
  
  
  useEffect(() =>{
    const getTag = async () =>{
      const res = await axios.get<Tag>(`https://to-do-list-backend-qijk.onrender.com/tags/${tagId}`, { headers: {
        Authorization: `Bearer ${getTokenFromMemory()}`,
      },})
      setTag(res.data)

      setValue("nameTag", res.data.name);
      setValue("color", res.data.color);
    }
    getTag();
  },[])


  function getTokenFromMemory(): string | null {
    return localStorage.getItem("token");
  }
  
  return(
    <>
      <Header></Header>
      <Menu></Menu>
      <div id="container">
        <section className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nome da Tag</label>
              <input type="text" id="nomeTag" placeholder="Nome da Tag" {...register("nameTag")} />
            </div>

            <div className="form-group cor">
              <label>Cor</label>
              <input type="color" {...register("color")}/>
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

export default UpdateTags