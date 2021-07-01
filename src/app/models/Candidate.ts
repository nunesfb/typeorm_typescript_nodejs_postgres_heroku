import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
    
  @Entity('candidate')
  class Candidate {
    @PrimaryGeneratedColumn('increment')
    id_candidate: number;
  
    @Column('character varying', { length: 150 })
    name: string;
  
    @Column('character varying', { length: 100 })
    email: string;

    @Column('character varying', { length: 20 })
    phone: string;
  
    @Column('character varying', { length: 20 })
    cpf: string;

    @Column('character varying', { length: 50 })
    city: string;

    @Column('character varying', { length: 50, nullable: true })
    profile_photo: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Candidate;
  