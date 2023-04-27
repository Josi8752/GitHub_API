import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";
import TitleHomeBody from "../../../components/TitleHome";


export default function HomeBody() {
  return (

    <>
      <main>
        <section>
          <div className="mt30 container">

            <TitleHomeBody title='Desafio Github API'

              subTitle='DevSuperior - Escola de programação' />


            <div className="mt30 dflex">
              <Link to="/before">
                <Btn title="Começar" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}
