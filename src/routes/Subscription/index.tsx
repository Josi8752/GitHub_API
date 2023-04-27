import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Btn from "../../components/Btn";
import HeaderSub from "../../components/Header-subscription";

export default function Inscricao() {
  return (


    <>
      <HeaderSub />
      <main>

        <section>
          <div className="container mt mb">
            <Link to="/">
              <Card text="Página de inscrição" />
            </Link>
            <div className="mt dflex">
              <Link to="/promotion">
                < Btn title="Ver promoção" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>


  );
}