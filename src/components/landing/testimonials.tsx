import SectionPage from "../templates/section-page";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
   return (
      <div id="testimonials" className="pt-16 pb-28">
         <SectionPage className="flex flex-col items-center gap-10">
            <h2 className="font-title text-4xl">Depoimentos</h2>
            <div className="grid grid-cols-3 gap-7">
               <TestimonialCard 
                  title="Gabriel Junior" 
                  subtitle="Desenvolvedor de Software" 
                  text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro." 
                  imageUrl="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
               />
               <TestimonialCard 
                  title="Juliana Moraes" 
                  subtitle="Diretora Comercial" 
                  text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro." 
                  imageUrl="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
               />
               <TestimonialCard 
                  title="Rafaela Vieira" 
                  subtitle="Servidora Pública" 
                  text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro." 
                  imageUrl="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
               />
            </div>
         </SectionPage>
      </div>
   )
}