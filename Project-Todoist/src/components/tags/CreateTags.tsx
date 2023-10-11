import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"


function CreateTags(){

  return(
    <>
      
      <Header></Header>
      <Menu></Menu>
      <div id="container">
        <section className="content">
          <form>
            <div className="form-group">
              <label htmlFor="nomeTag">Nome da Tag</label>
              <input type="text" id="nomeTag" name="nomeTag" placeholder="Nome da Tag" required/>
            </div>

            <div className="form-group cor">
              <label htmlFor="">Cor</label>
              <input type="color" />
            </div>

            <div className="form-group btns">
              <button id="btnCancel">Cancelar</button>
              <button id="send">
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