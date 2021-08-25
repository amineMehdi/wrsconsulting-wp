import React, { useEffect, useState, useRef } from "react";
import "../style/EntrepriseContact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";

function EntrepriseContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
      navbarHeight = navbarHeight.offsetHeight;
    } else {
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".contact-form-informations-wrapper"
    ).style = `margin-top : ${navbarHeight + 50 }px`;
  }, []);

  const contactSubmit = (formData) => {
    let templateID;
    // const [serviceID, userID] = [
    //   process.env.REACT_APP_SERVICE_ID,
    //   process.env.REACT_APP_USER_ID,
    // ];
    // if (formData.entreprise !== "") {
    //   templateID = process.env.REACT_APP_COMPANY_CONTACT_TEMPLATE_ID;
    // } else {
    //   templateID = process.env.REACT_APP_PERSONAL_CONTACT_TEMPLATE_ID;
    // }
    const [serviceID, userID] = [
      "service_g825y4p",
      "user_ToKOmzD354bLFLQIIeyYp",
    ];
    if (formData.entreprise !== "") {
      templateID = "template_a4ep1ee";
    } else {
      templateID = "template_rkf7zmq";
    }
    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        setResult(true);
        showResult();
        reset();
      },
      (error) => {
        setResult(false);
        showResult();
      }
    );
  };
  const showResult = () => {
    resultRef.current.style.display = "block";
    setTimeout(() => {
      resultRef.current.style.opacity = "0";
    }, 3000);
    setTimeout(() => {
      resultRef.current.style = "display : none; opacity : 1";
    }, 3500);
  };
  const closeResult = () => {
    resultRef.current.style.display = "none";
  };
  return (
    <div className="contact-form-informations-wrapper">
      <div className="contact-form">
        <header>ENVOYER NOUS UN MESSAGE</header>
        <form onSubmit={handleSubmit(contactSubmit)}>
          <div className="form-group">
            <label>
              Nom d'entreprise <span style={{ color: `red` }}>*</span> :
            </label>
            <input
              type="text"
              name="entreprise"
              placeholder="Nom d'entreprise"
              {...register("entreprise", {
                validate: (_) => {
                  if (
                    getValues("nom") ||
                    getValues("prenom") ||
                    getValues("entreprise")
                  )
                    return true;
                  else return "Veuillez indiquer le nom d'entreprise";
                },
              })}
            />
            {errors.entreprise && (
              <p className="input-error">{errors.entreprise.message}</p>
            )}
          </div>
          <div className="or-container">
            <p>Ou</p>
          </div>
          <div className="form-group-wrapper">
            <div className="form-group">
              <label>
                Votre Nom <span style={{ color: `red` }}>*</span> :
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                {...register("nom", {
                  validate: (_) => {
                    if (getValues("entreprise") || getValues("nom"))
                      return true;
                    else return "Veuillez saisir votre nom";
                  },
                })}
              />
              {errors.nom && (
                <p className="input-error">{errors.nom.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>
                Votre Prenom <span style={{ color: `red` }}>*</span> :
              </label>
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                {...register("prenom", {
                  validate: (_) => {
                    if (getValues("entreprise") || getValues("prenom"))
                      return true;
                    else return "Veuillez saisir votre prénom";
                  },
                })}
                // , {required: "Veuillez saisir votre prenom"}
              />
              {errors.prenom && (
                <p className="input-error">{errors.prenom.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>
              Votre adresse de messagerie{" "}
              <span style={{ color: `red` }}>*</span> :
            </label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Veuillez saisir votre adresse mail",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "L'adresse mail que vous saisi est incorrect",
                },
              })}
            />
            {errors.email && (
              <p className="input-error">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Objet : </label>
            <input
              type="text"
              name="objet"
              placeholder="Objet"
              {...register("objet")}
            />
          </div>

          <div className="form-group">
            <label>Votre Message : </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              rows="10"
              {...register("message")}
            ></textarea>
          </div>
          <div className="contact-result"></div>
          <div>
            <span style={{ color: `red` }}> * : Champ obligatoire</span>
          </div>
          <div
            className={`contact-result-container ${
              result ? `success` : `error`
            }`}
            ref={resultRef}
          >
            <div className="contact-result-close">
              <a onClick={closeResult}>&#10799;</a>
            </div>
            <p>
              {result
                ? `Nous avons bien reçu votre demande, nous vous contacterons le plus tôt possible`
                : `Votre demande n'a pas été enregistré, veuillez réessayer`}
            </p>
          </div>
          <div className="btn btn-submit">
            <button type="submit">
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
      <div className="contact-informations">
        <header>CONTACT INFORMATION</header>
        <ul>
          <li>
            <LocationOnIcon style={{ color: `#1a668c` }} />
            <p>4 bis rue cadet de vaux 95130 Franconville</p>
          </li>
          <li>
            <PhoneIcon style={{ color: `#1a668c` }} />
            <p>+336 34 27 40 69</p>
          </li>

          <li>
            <MailIcon style={{ color: `#1a668c` }} />
            <p>
              <a href="mailto:contact@wrsconsulting.fr">
                contact@wrsconsulting.fr
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EntrepriseContact;
