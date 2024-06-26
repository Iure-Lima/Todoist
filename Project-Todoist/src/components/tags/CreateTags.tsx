import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type Inputs = {
  nameTag: string
  color: string
}

function CreateTags(){
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.nameTag == null && data.color == null){
      return
    }
    const res = await axios.post('https://to-do-list-backend-qijk.onrender.com/tags', {
      name: data.nameTag,
      color: data.color,
    }, { headers: {
      Authorization: `Bearer ${getTokenFromMemory()}`,
    },})
    if (res.status == 201){window.location.href = "/dashboardTags";}

  }

  function getTokenFromMemory(): string | null {
    return localStorage.getItem("token");
  }


  const onCancel = () =>{
    window.location.href = "/dashboardTags";
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
              <input type="text" id="nomeTag" maxLength={20} placeholder="Nome da Tag" required {...register("nameTag")}/>
            </div>

            <div className="form-group cor">
              <label>Cor</label>
              <input type="color" {...register("color")}/>
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

export default CreateTags