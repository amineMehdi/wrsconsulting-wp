import React, { useState, useEffect } from "react";
import "../style/Candidature.css";
import { useForm } from "react-hook-form";

function Candidature() {
  const [cvName, setCvName] = useState(null);
  const [motivationName, setMotivationName] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors
  } = useForm({ mode: "onChange" });
  const jobSubmit = (formData,e) => {
    console.log(formData);
    e.target.reset();
  };

  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
      navbarHeight = navbarHeight.offsetHeight;
    } else {
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".consulting-container"
    ).style = `margin-top : ${navbarHeight}px`;
  }, []);
  return (
    <div className="candidature-container">
      <div className="job-form-container">
        <div className="job-header">
          <header>Candidature spontannée</header>
        </div>
        <form onSubmit={handleSubmit(jobSubmit)}>
          <div className="form-group" id="nom">
            <label>
              Nom <span style={{ color: `red` }}>*</span> :{" "}
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              {...register("nom", {
                required: "Veuillez saisir votre nom",
              })}
            />
            {errors.nom && <p className="input-error">{errors.nom.message}</p>}
          </div>

          <div className="form-group" id="prenom">
            <label>
              Prenom <span style={{ color: `red` }}>*</span> :{" "}
            </label>
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              {...register("prenom", {
                required: "Veuillez saisir votre Prénom",
              })}
            />
            {errors.nom && (
              <p className="input-error">{errors.prenom.message}</p>
            )}
          </div>

          <div className="form-group" id="email">
            <label>
              E-mail <span style={{ color: `red` }}>*</span> :{" "}
            </label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Veuillez saisir votre e-mail",
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

          <div className="form-group" id="telephone">
            <label>
              Telephone <span style={{ color: `red` }}>*</span> :{" "}
            </label>
            <input
              type="text"
              name="telephone"
              placeholder="Telephone"
              {...register("telephone", {
                required: "Veuillez saisir votre numero de telephone",
              })}
            />
            {errors.nom && (
              <p className="input-error">{errors.telephone.message}</p>
            )}
          </div>
          <div className="form-group" id="adresse">
            <label>Adresse : </label>
            <input
              type="text"
              name="adresse"
              placeholder="Adresse"
              {...register("adresse")}
            />
          </div>

          <div className="form-group" id="postal">
            <label>Code Postal : </label>
            <input
              type="number"
              name="code"
              placeholder="Code Postal"
              {...register("codePostal", {
                maxLength: {
                  value: 5,
                  message: "Le code postal que vous avez saisi est incorrect",
                },
              })}
            />
          </div>

          <div className="form-group" id="ville">
            <label>Ville : </label>
            <input
              type="text"
              name="ville"
              placeholder="Ville"
              {...register("ville")}
            />
          </div>

          <div className="form-group" id="pays">
            <label>Pays : </label>
            <input
              type="text"
              name="pays"
              placeholder="Pays"
              {...register("pays")}
            />
          </div>
          <div className="form-group" id="message">
            <label>Message : </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              {...register("message")}
            />
          </div>

          <div className="form-group" id="cv">
            <label>
              Votre CV <span style={{ color: `red` }}>*</span> :{" "}
            </label>
            <input
              type="file"
              name="cv"
              id="fileCV"
              accept=".pdf, .docx"
              {...register("cv", {
                required: "Veuillez deposer votre cv",
              })}
              onChange={(e) => {
                if (e.target.files[0].size > 5000000) {
                  console.log("m");
                  setError("cv", {
                    type: "overSize",
                    message: "Votre fichier a dépassé la limite (>5MB)",
                  });
                } else {
                  setValue("cv", e.target.files);
                  setCvName(e.target.files[0].name);
                  clearErrors("cv");
                }
                console.log(e);
              }}
            />
            <label
              onClick={() => {
                document.querySelector("#fileCV").click();
              }}
            >
              Parcourir (max. 5MB)
            </label>
            {errors.cv && <p className="input-error">{errors.cv.message}</p>}
            {<p>{errors.cv ? "" : cvName}</p>}
          </div>

          <div className="form-group" id="motivation">
            <label>Lettre de Motivation : </label>
            <input
              type="file"
              id="fileMotivation"
              name="motivation"
              accept=".pdf, .docx"
              {...register("motivation")}
              onChange={(e) => {
                if (e.target.files[0].size > 5000000) {
                  setError("motivation", {
                    type: "overSize",
                    message: "Votre fichier a dépassé la limite (>5MB)",
                  });
                } else {
                  setValue("motivation", e.target.files);
                  setMotivationName(e.target.files[0].name);
                  clearErrors("motivation");
                  console.log(e);
                }
              }}
            />
            <label
              onClick={() => {
                document.querySelector("#fileMotivation").click();
              }}
            >
              Parcourir (max. 5MB)
            </label>
            {motivationName && <p>{motivationName}</p>}
          </div>
          <div id="obligatoire">
            <span style={{ color: `red` }}>* : Champ obligatoire</span>
          </div>
          <div className="btn btn-submit">
            <button type="submit">
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Candidature;
