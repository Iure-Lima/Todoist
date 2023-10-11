import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"

function UpdateTags(){
  return(
    <>
      <Header></Header>
      <Menu></Menu>
      <div id="container">
        <section className="content">
          <form>
            <div className="form-group">
              <label htmlFor="nomeTag">Nome da Tag</label>
              <input type="text" id="nomeTag" name="nomeTag" placeholder="Nome da Tag" />
            </div>

            <div className="form-group cor">
              <label htmlFor="">Cor</label>
              <input type="color" />
            </div>

            <div className="form-group btns">
              <button id="btnCancel">Cancelar</button>
              <button id="send" style={{width: "103px"}}>Salvar</button>
            </div>
          </form>
        </section>
      </div>
    
    
    </>
  )
}

export default UpdateTags