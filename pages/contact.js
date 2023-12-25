import {Button} from "primereact/button"
import Head from "next/head"
import {InputText} from "primereact/inputtext"
import {InputTextarea} from "primereact/inputtextarea"
import {Toast} from "primereact/toast"
import {useFormik} from "formik"
import {useRef} from "react"
import SvgFactory from "@/components/SvgFactory"
import {Message} from "primereact/message"


export default function Contact() {
    const toast = useRef(null)

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validate: (data) => {
            let errors = {}

            if (!data.value) {
                errors.name = "Ce champ est obligatoire."
                errors.email = "Ce champ est obligatoire."
                errors.message = "Ce champ est obligatoire."
            }

            return errors
        },
        onSubmit: (data) => {
            data && show(data)
            formik.resetForm()
        }
    })

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name])

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <></>;
    }

    return (<>
        <Head>
            <title>Augustin Pasquier</title>
            <meta name="description" content="Augustin Pasquier - Contact"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
            <h1 className="contact-title">Besoin de me contacter ?</h1>

            <section id="contact-section">
                <div className="text-container">
                    <p>
                        Retrouvez-moi sur GitHub et LinkedIn ou envoyez-moi directement un message grâce au formulaire
                        ci-dessous.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="socials-container">
                        <div className="social-item">
                            <SvgFactory item="github"/>
                            <span>GitHub</span>
                        </div>

                        <div className="social-item">
                            <SvgFactory item="linkedin"/>
                            <span>LinkedIn</span>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="field-container">
                            <label htmlFor="name">Nom<span>*</span></label>
                            <InputText id="name" name="name" placeholder="Votre nom" value={formik.values.name} onChange={(e) => {formik.setFieldValue("name", e.target.value)}} className={isFormFieldInvalid("name") ? "p-invalid" : ""}/>
                            {getFormErrorMessage("name")}
                        </div>

                        <div className="field-container">
                            <label htmlFor="email">Adresse mail<span>*</span></label>
                            <InputText id="email" name="email" placeholder="Votre adresse mail" value={formik.values.email} onChange={(e) => {formik.setFieldValue("email", e.target.value)}} className={isFormFieldInvalid("email") ? "p-invalid" : ""}/>
                            {getFormErrorMessage("email")}
                        </div>

                        <div className="field-container">
                            <label htmlFor="message">Message<span>*</span></label>
                            <InputTextarea id="message" name="message" placeholder="Votre message" value={formik.values.message} onChange={(e) => {formik.setFieldValue("message", e.target.value)}} className={isFormFieldInvalid("message") ? "p-invalid" : ""} autoResize/>
                            {getFormErrorMessage("message")}
                        </div>

                        <Button id="submit-button" type="submit" label="Envoyer" icon="pi pi-send"/>
                    </form>
                </div>
            </section>
        </main>

        <Toast ref={toast}/>
    </>)
}