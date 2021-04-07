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
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  tipoDeProfissional: string;

  @ManyToOne(() => ProfessionalType)
  @JoinColumn({ name: 'tipoDeProfissional' })
  professionalType: ProfessionalType;

  @Column()
  situacao: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Professional;
