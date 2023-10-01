import { useState } from "react";
import "./logUser.css"

function Login(){
  const [inputType, setInputType] = useState("password");
  const [iconCloseDisplay, setIconCloseDisplay] = useState("none");
  const [iconOpenDisplay, setIconOpenDisplay] = useState("block");

  const handleClick = () => {

    if (inputType == "password"){
        setInputType("text")
        setIconCloseDisplay("block")
        setIconOpenDisplay("none")
    }else{
      setInputType("password")
      setIconCloseDisplay("none")
      setIconOpenDisplay("block")
    }

  };



  return(
    <>
      <svg id="logo" width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4559 36.1607L47.7686 43.3645V58.5248V73.7925L59.2732 80.1362C65.6168 83.5768 71.2078 86.5873 71.6379 86.8024C72.068 87.0174 72.4981 78.2008 72.4981 67.1263V47.0202L68.1973 50.4608L63.8965 53.9014V64.5458C63.8965 70.8895 63.4664 75.1903 62.8213 75.1903C62.1762 75.1903 61.7461 71.4271 61.7461 66.0511C61.7461 57.127 61.6386 56.912 59.5957 58.2022C57.8754 59.2774 57.4454 60.7827 57.4454 65.191C57.4454 69.4917 57.0153 70.8895 55.8326 70.8895C54.5423 70.8895 54.2198 68.8466 54.2198 58.7398V46.6976L63.4664 41.4292C72.9282 36.0532 74.0033 34.978 73.3582 31.2148C73.0357 29.172 71.9605 29.602 60.4559 36.1607Z" fill="#B21BCB"/>
<path d="M74.6484 32.3976C74.6484 35.8382 75.186 36.3758 84.3252 41.7518L94.1094 47.3428L93.7869 58.7398C93.5718 66.6963 93.0343 70.3519 92.1741 70.6745C91.2064 70.997 90.7763 69.3842 90.7763 65.0835C90.7763 60.2451 90.3463 58.9549 88.626 57.9872C86.5831 56.912 86.4756 57.127 86.4756 65.406C86.4756 70.1369 86.0455 74.3301 85.4004 74.6527C84.7553 75.0828 84.3252 71.4271 84.3252 64.5459V53.7939L80.347 50.5683L76.2612 47.2352L75.9387 66.6963C75.8312 77.4482 75.8312 86.4798 76.1537 86.6949C76.3687 86.9099 81.9598 84.1144 88.5184 80.4587L100.453 73.9001V58.6323V43.3645L88.4109 36.4833C81.8522 32.6126 76.0462 29.2795 75.5086 29.172C75.0785 28.9569 74.6484 30.4622 74.6484 32.3976Z" fill="#9920AD"/>
<path d="M67.1222 105.296V114.973H61.7462H56.3702V110.672V106.371H60.671C63.7891 106.371 64.9718 105.941 64.9718 104.758C64.9718 102.178 55.7251 102.5 54.2198 105.188C52.607 108.306 52.9296 114.542 54.8649 116.478C56.9078 118.521 67.1222 118.843 69.0575 116.908C69.9177 116.048 70.3477 111.962 70.3477 105.618C70.3477 97.4468 70.0252 95.619 68.7349 95.619C67.4447 95.619 67.1222 97.4468 67.1222 105.296Z" fill="#B21BCB"/>
<path d="M96.1525 97.2318C96.1525 98.0919 96.9051 98.8445 97.7653 98.8445C98.6254 98.8445 99.378 98.0919 99.378 97.2318C99.378 96.3716 98.6254 95.619 97.7653 95.619C96.9051 95.619 96.1525 96.3716 96.1525 97.2318Z" fill="#B21BCB"/>
<path d="M11.2121 99.3821C11.2121 100.565 12.3948 100.995 15.5129 100.995H19.8136V109.596C19.8136 116.478 20.1362 118.198 21.4264 118.198C22.7167 118.198 23.0392 116.478 23.0392 109.596V100.995H27.34C30.4581 100.995 31.6408 100.565 31.6408 99.3821C31.6408 98.0919 29.813 97.7693 21.4264 97.7693C13.0399 97.7693 11.2121 98.0919 11.2121 99.3821Z" fill="#B21BCB"/>
<path d="M125.183 100.457C125.183 102.608 124.645 103.145 122.495 103.145C120.774 103.145 119.807 103.79 119.807 104.758C119.807 105.726 120.774 106.371 122.495 106.371C125.075 106.371 125.183 106.693 125.183 112.284C125.183 116.8 125.505 118.198 126.796 118.198C128.086 118.198 128.408 116.8 128.408 112.284C128.408 106.478 128.408 106.371 131.634 106.371C133.784 106.371 134.859 105.833 134.859 104.758C134.859 103.683 133.784 103.145 131.634 103.145C128.946 103.145 128.408 102.715 128.408 100.457C128.408 98.737 127.763 97.7693 126.796 97.7693C125.828 97.7693 125.183 98.737 125.183 100.457Z" fill="#B21BCB"/>
<path d="M34.0061 104.436C32.2858 106.156 32.2858 115.187 34.0061 116.908C34.7587 117.66 37.8768 118.198 40.9949 118.198C45.8332 118.198 46.9084 117.768 48.4137 115.51C50.4566 112.392 49.919 105.511 47.5536 104.005C45.4032 102.715 35.4039 103.038 34.0061 104.436ZM46.1558 110.672C46.1558 114.435 46.1558 114.435 41.1024 114.757L35.9415 115.08V110.672V106.263L41.1024 106.586C46.1558 106.908 46.1558 106.908 46.1558 110.672Z" fill="#B21BCB"/>
<path d="M75.9387 104.436C74.2184 106.156 74.2184 115.188 75.9387 116.908C77.874 118.843 88.0884 118.521 90.1312 116.478C92.0666 114.542 92.3891 108.306 90.7763 105.188C89.8087 103.575 88.4109 103.145 83.465 103.145C80.0244 103.145 76.6913 103.683 75.9387 104.436ZM88.626 110.672V114.973H83.25H77.874V110.672V106.371H83.25H88.626V110.672Z" fill="#B21BCB"/>
<path d="M96.1525 110.672C96.1525 116.693 96.475 118.198 97.7653 118.198C99.0555 118.198 99.378 116.693 99.378 110.672C99.378 104.651 99.0555 103.145 97.7653 103.145C96.475 103.145 96.1525 104.651 96.1525 110.672Z" fill="#B21BCB"/>
<path d="M103.679 104.758C103.034 105.618 102.711 107.231 103.141 108.414C103.786 110.457 105.292 110.994 113.14 112.069C113.893 112.177 114.538 112.715 114.538 113.36C114.431 113.897 111.743 114.542 108.517 114.757C104.216 114.972 102.604 115.51 102.604 116.585C102.604 117.875 104.109 118.198 108.947 118.198C116.043 118.198 117.979 116.8 117.441 112.069C117.119 109.274 116.796 109.059 111.528 108.736C104.324 108.306 104.109 106.371 111.205 106.371C115.291 106.371 116.581 105.941 116.581 104.758C116.581 102.5 105.614 102.5 103.679 104.758Z" fill="#B21BCB"/>
      </svg>
      <section id="container">
        <div id="content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Usuário:</label>
              <input type="text" id="email" name="email" placeholder="Digite seu e-mail" maxLength={39} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type={inputType} id="password" name="password" placeholder="Digite sua senha" maxLength={31} required/>
              <svg className="open" onClick={handleClick} style={{ display: iconOpenDisplay }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_44_14)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2405 6.52781C20.197 6.59812 24.2634 11.0545 26.3002 14.8889C26.3002 14.8889 25.5834 16.3556 24.9113 17.2945C24.5859 17.7487 24.2437 18.1912 23.8842 18.6192C23.6278 18.9239 23.363 19.2206 23.0883 19.5089C20.6334 22.087 17.108 24.0103 13.3852 23.2636C9.24938 22.4339 5.87578 18.8902 3.84797 15.0787C3.84797 15.0787 4.56797 13.6106 5.24391 12.6731C5.54672 12.2527 5.86453 11.8434 6.19734 11.4464C6.45234 11.1422 6.71672 10.8455 6.99 10.5572C9.15891 8.27156 11.9419 6.51187 15.2405 6.52781ZM15.2231 8.40281C12.4622 8.3925 10.1663 9.93422 8.34984 11.8481C8.10281 12.1083 7.86469 12.3764 7.63406 12.6511C7.33078 13.013 7.04109 13.3866 6.765 13.7695C6.48891 14.152 6.20578 14.6348 5.98125 15.045C7.76906 18.0492 10.4527 20.7628 13.7541 21.4252C16.8305 22.0425 19.7016 20.3466 21.7303 18.2161C21.9783 17.9559 22.2178 17.6873 22.4494 17.4122C22.7775 17.0217 23.0897 16.6181 23.3864 16.2033C23.6611 15.8194 23.9438 15.3356 24.1678 14.925C22.3125 11.8195 19.1381 8.46375 15.2231 8.40281Z" fill="#C1C1C1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0741 11.2256C17.1483 11.2256 18.8325 12.9098 18.8325 14.9836C18.8325 17.0578 17.1483 18.7416 15.0741 18.7416C13.0003 18.7416 11.3161 17.0578 11.3161 14.9836C11.3161 12.9098 13.0003 11.2256 15.0741 11.2256ZM15.0741 13.1048C16.1114 13.1048 16.9533 13.9467 16.9533 14.9836C16.9533 16.0209 16.1114 16.8628 15.0741 16.8628C14.0372 16.8628 13.1953 16.0209 13.1953 14.9836C13.1953 13.9467 14.0372 13.1048 15.0741 13.1048Z" fill="#C1C1C1"/>
</g>
<defs>
<clipPath id="clip0_44_14">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
              </svg>

              <svg className="close" onClick={handleClick} style={{ display: iconCloseDisplay }} width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_32_327)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.40924 3.87938L4.95752 5.04038L23.6386 19.9856L25.0903 18.8243L6.40924 3.87938Z" fill="#C1C1C1"/>
<path d="M8.02454 7.49401L9.39095 8.58714C7.89516 9.60601 6.70407 10.8743 5.93438 11.9839L5.93204 11.9876C8.07563 14.8549 11.4769 17.5646 15.7697 17.1536C16.9284 17.0426 18.0094 16.7258 18.997 16.2724L20.3803 17.3786C18.4552 18.3671 16.2483 18.8906 13.8572 18.6319C9.54563 18.1654 6.02016 15.3364 3.79782 12.0139C4.84126 10.3343 6.2686 8.72739 8.02454 7.49401ZM11.1324 5.87401C12.338 5.44426 13.6425 5.19151 15.0356 5.17351C15.113 5.17314 16.0313 5.20801 16.4475 5.26276C16.7086 5.29726 16.9688 5.34039 17.2252 5.39401C21.315 6.24639 24.345 9.01239 26.25 11.862C25.4508 13.1531 24.4041 14.4131 23.1558 15.4928L21.8306 14.4326C22.7527 13.6376 23.5214 12.7526 24.1134 11.8943C24.1134 11.8943 23.5181 11.1285 23.0667 10.6478C22.7766 10.3388 22.4714 10.0388 22.1508 9.74964C21.8977 9.52164 20.9147 8.74726 20.6808 8.58601C19.1114 7.50639 17.2688 6.65926 15.0586 6.67351C14.2027 6.68439 13.3795 6.81939 12.5981 7.04664L11.1324 5.87401Z" fill="#C1C1C1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7441 10.47L12.8686 11.3693C12.795 11.5481 12.7547 11.7394 12.7547 11.9378C12.7547 12.9398 13.7714 13.7531 15.0239 13.7531C15.2719 13.7531 15.511 13.7213 15.7346 13.662L16.8591 14.5616C16.3163 14.8054 15.69 14.9441 15.0239 14.9441C12.9497 14.9441 11.266 13.5971 11.266 11.9378C11.266 11.4049 11.4399 10.9043 11.7441 10.47ZM14.9546 8.93213C14.9775 8.93176 15.001 8.93138 15.0239 8.93138C17.0981 8.93138 18.7819 10.2788 18.7819 11.9378C18.7819 11.9565 18.7819 11.9749 18.7814 11.9933L14.9546 8.93213Z" fill="#C1C1C1"/>
</g>
<defs>
<clipPath id="clip0_32_327">
<rect width="30" height="24" fill="white"/>
</clipPath>
</defs>
              </svg>


            </div>
            <div className="form-group" id="btns">
              <a href="/register">Cadastra-se</a>
              <button>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1875 2.53125H5.0625C3.19854 2.53125 1.6875 4.04229 1.6875 5.90625V21.0938C1.6875 22.9577 3.19854 24.4688 5.0625 24.4688H15.1875C17.0515 24.4688 18.5625 22.9577 18.5625 21.0938V5.90625C18.5625 4.04229 17.0515 2.53125 15.1875 2.53125Z" fill="#D8E1EF"/>
<path d="M25.0678 12.9009L21.6928 9.52594C21.5339 9.36706 21.3184 9.2778 21.0938 9.2778C20.8691 9.2778 20.6536 9.36706 20.4947 9.52594C20.3358 9.68482 20.2465 9.90031 20.2465 10.125C20.2465 10.3497 20.3358 10.5652 20.4947 10.7241L22.4353 12.6563H10.125C9.90122 12.6563 9.68661 12.7451 9.52838 12.9034C9.37015 13.0616 9.28125 13.2762 9.28125 13.5C9.28125 13.7238 9.37015 13.9384 9.52838 14.0966C9.68661 14.2549 9.90122 14.3438 10.125 14.3438H22.4353L20.4947 16.2759C20.4156 16.3544 20.3528 16.4477 20.31 16.5505C20.2672 16.6533 20.2451 16.7636 20.2451 16.875C20.2451 16.9864 20.2672 17.0967 20.31 17.1995C20.3528 17.3023 20.4156 17.3956 20.4947 17.4741C20.5731 17.5531 20.6664 17.6159 20.7693 17.6588C20.8721 17.7016 20.9824 17.7236 21.0938 17.7236C21.2051 17.7236 21.3154 17.7016 21.4182 17.6588C21.5211 17.6159 21.6144 17.5531 21.6928 17.4741L25.0678 14.0991C25.1469 14.0206 25.2097 13.9273 25.2525 13.8245C25.2953 13.7217 25.3174 13.6114 25.3174 13.5C25.3174 13.3886 25.2953 13.2783 25.2525 13.1755C25.2097 13.0727 25.1469 12.9794 25.0678 12.9009Z" fill="#B21BCB"/>
                </svg>

                <p>Login</p>

              </button>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Login