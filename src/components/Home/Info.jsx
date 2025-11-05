import DesignIcon from "../../assets/svg/DesignIcon.svg";
import WebIcon from "../../assets/svg/WebIcon.svg";
import WorkIcon from "../../assets/svg/WorkIcon.svg";

const Info = () => (
  <section className="container grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
    <div className="flex flex-col items-start">
      <span className="mb-6">
        <img src={DesignIcon} alt="DesignIcon" />
      </span>
      <h3 className="mb-3 text-textColor-heading-strong">Product Designer</h3>
      <p className="text-left text-description">
        Diseño experiencias digitales claras, escalables y centradas en las personas, siempre alineadas con los objetivos de negocio.
      </p>
    </div>
    <div className="flex flex-col items-start">
      <span className="mb-6">
        <img src={WorkIcon} alt="WorkIcon" /></span>
      <h3 className="mb-3 text-textColor-heading-strong">+4 años de experiencia</h3>
      <p className="text-left text-description">
        He trabajado como UX/UI y Product Designer en proyectos internacionales de energía, banca y entretenimiento.
      </p>
    </div>
    <div className="flex flex-col items-start">
      <span className="mb-6"> <img src={WebIcon} alt="WebIcon" /></span>
      <h3 className="mb-3 text-textColor-heading-strong">Reubicación/remoto</h3>
      <p className="text-left text-description">
        Viviendo en Madrid, abierto a oportunidades en Europa, tanto remoto como reubicación.
      </p>
    </div>
  </section>
);

export default Info;
