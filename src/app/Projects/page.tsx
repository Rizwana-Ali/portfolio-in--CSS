import "../style/projects.css";
import Image from "next/image";
export default function Project() {
    return (
        <div className="projectContainer">
            <h1 className="homes-title">My Projects</h1>

            <div className="projectItem">
                <Image
                    src="/Screenshot 2024-11-14 021132.png"
                    alt="Calculator Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A functional and responsive calculator built using HTML,CSS and JavaScript .This calculator performs basic arithmatic operations such as addition, sudtraction, multiplicationand division.
                    <a href="https://calculator-with-html-css-and-javascript-jebz.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/Rizwana Resume.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A visually appealing and intractive static resume built using HTML, CSS and JavaScript. This resume showcases my skills , experience and education in a clean and organised manner. 
                    <a href="https://hackathon-milestones1-and-2.vercel.app//" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/Screenshot 2024-11-14 013834.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                Experience precision and perfection with my Figma-designed website, crafted to deliver a seamless user experience.Every pixal is meticulously placed to ensure a visually stunng and highly functional online presence. 

                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7252795432282558464//" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/Screenshot 2024-11-14 034519.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                Instantly customise your proffesional profile with this fully editable resume template, designed to help you stand out in today's competitive job market.
                
                    <a href="https://hackathon-milestone-4-chi.vercel.app//" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                
                
        
                    
                <p className="projectDescription">
                

                    <a href="//" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>
            

            


 
    </div>
  );
}