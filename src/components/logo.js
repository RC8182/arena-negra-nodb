import Image from 'next/image'
import logo from '../../public/images/LogoArena.png';

export const Logo = ({ width }) => {
  return (
    <div className={`m-4 self-center`}>
      <Image
        src={logo}
        alt="Logo de Arena"
        style={{ width: width, height: 'auto' }}
      />
    </div>
  )
}
