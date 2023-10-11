import "../../assets/tags&task_style/create&update.css"
import Header from "../header/Header"
import Menu from "../menuLateral/menu"

function UpdateTask(){
  return(
    <>
      <Header></Header>
      <Menu></Menu>
      <div id="container">
        <section className="content task">
          <form>
            <div className="form-group">
              <label htmlFor="nomeTask">Nome da Task</label>
              <input type="text" id="nomeTask" name="nomeTask" placeholder="Nome da Task" required/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição da Task</label>
              <textarea name="description" id="description" placeholder="Descrição"/>
            </div>
            <div className="form-group multi-fields">
              <div className="field">
                <label htmlFor="data">Data</label>
                <input type="date" name="data" id="data" required/>
              </div>

              <div className="field">
                <label htmlFor="prioridade">Prioridade</label>
                <select name="prioridade" id="prioridade" style={{color:"green"}}>
                  <option value="P1" style={{color:"#FE6F65"}}>Prioridade 1</option>
                  <option value="P2" style={{color:"#F79513"}}>Prioridade 2</option>
                  <option value="P3" style={{color:"#5196FE"}}>Prioridade 3</option>
                  <option value="P4" selected style={{color:"#9A9EA4"}}>Prioridade 4</option>

                </select>
              </div>

              <div className="field">
                <label htmlFor="dropTag">Tag</label>
                <select name="dropTag" id="dropTag" style={{color:"green"}}>
                  <option value="NULL" selected disabled >Tags</option>
                  <option value="Exemplo1">Exemplo1</option>
                  <option value="Exemplo2">Exemplo2</option>
                  <option value="Exemplo3">Exemplo3</option>
                  <option value="Exemplo4">Exemplo4</option>

                </select>
              </div>

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

export default UpdateTask