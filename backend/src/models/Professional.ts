import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import ProfessionalType from './ProfesionalType';
@Entity('professional')
class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @ManyToOne(() => ProfessionalType)
  @JoinColumn({ name: 'tipoDeProfissional' })
  tipoDeProfissional: ProfessionalType;

  @Column()
  situacao: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Professional;
