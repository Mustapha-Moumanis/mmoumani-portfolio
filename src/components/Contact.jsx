
import { useState, useRef } from 'react'
import right_arrow from '../assets/images/svg/right-arrow.svg'
import SlideUp from '../utlits/animations/slideUp'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        if (errors[name]) {
            setErrors({...errors, [name]: ''});
        }
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        //Name
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        else if (form.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
            isValid = false;
        }
        else if (!form["name"].match(/^[a-zA-Z- ]+$/)) {
            newErrors.name = "Only letters";
            isValid = false;
        }

        //Email
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(form.email)) {
              newErrors.email = 'Please enter a valid email address';
              isValid = false;
            }
        }

        // Subject
        if (!form.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        } else if (form.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
            isValid = false;
        }

        // Message validation
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (form.message.trim().length < 8) {
            newErrors.message = 'Message must be at least 8 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return;
        
        setLoading(true)
        const formData = new FormData(e.target);
        
        formData.append("access_key", "2b97df33-e42f-479d-a316-fa5db8bf8c2f");
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        const MySwal = withReactContent(Swal)
        if (data.success) {
            setLoading(false)

            e.target.reset();
            setForm({ name: '', email: '', subject: '', message: '' });

            MySwal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                color: 'var(--sub-text)',
                background: 'var(--section-background)',
                customClass: {
                    confirmButton: 'aryaBtn',
                }
            })
        } else {
            setLoading(false)
            MySwal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error",
                color: 'var(--sub-text)',
                background: 'var(--section-background)',
                customClass: {
                    confirmButton: 'aryaBtn',
                }
            })
        }

    }

    return (
        <section className="section-nine" id="contact">
            <SlideUp><h3 className="creative brand">Let’s Connect</h3></SlideUp>
            <h3 className="visionary">
            Feel free to reach out! Whether you want to discuss a project or just have a chat, I’d love to connect and collaborate.
            </h3>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">NAME*</p>
                        <input type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            name="name"
                            autoComplete="off"
                            className={errors.name ? 'error-input' : ''}
                        />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className="labal-input">
                        <p className="labal">EMAIL*</p>
                        <input type="text"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            name="email"
                            autoComplete="off"
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                    </div>
                </div>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">SUBJECT*</p>
                        <input type="text"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Your Subject"
                            name="subject"
                            autoComplete="off"
                            className={errors.subject ? 'error-input' : ''}
                        />
                        {errors.subject && <p className="error-text">{errors.subject}</p>}
                    </div>
                </div>
                <div className="input-main">
                    <div className="labal-input">
                        <p className="labal">MESSAGE*</p>
                        <input type="text"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write Your Message..."
                            name="message"
                            autoComplete="off"
                            className={errors.message ? 'error-input' : ''}
                        />
                        {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>
                </div>
                <div className="download-btn">
                    <button className="aryaBtn">
                        {loading ? 'sending...' : (<>Send Message <img src={right_arrow} alt="right-arrow" loading="lazy"></img></>)}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact