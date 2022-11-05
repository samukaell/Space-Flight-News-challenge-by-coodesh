const IMAGENOTFOUND =
  "https://amazonia.mapbiomas.org/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";
import {
  ContainerCard,
  ContainerInfo,
  BoxDescription,
  Title,
  Description,
  Date,
  BoxBuuton
} from "./styed";

export default function Card(props) {
  const { image, title, date, description, more } = props;
  console.log("O titulo é ->", props.title);
  return (
    <ContainerCard>
      <ContainerInfo>
        <img className="image" src={IMAGENOTFOUND} />
        <BoxDescription>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Description>{description}</Description>
        </BoxDescription>
      </ContainerInfo>
      <BoxBuuton>
        <button>Ir para site</button>
      </BoxBuuton>  
    </ContainerCard>
  );
}
