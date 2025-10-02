export interface Projeto {
  id: number;
  nome: string;
  descricao?: string;
  dataInicio: Date;
  dataFim: Date;
}

let projetos: Projeto[] = [];

export const getProjetos = () => projetos;
export const getProjetoById = (id: number) => projetos.find(p => p.id === id);
export const createProjeto = (projeto: Projeto) => { projetos.push(projeto); return projeto; };
export const updateProjeto = (id: number, dados: Partial<Projeto>) => {
  const idx = projetos.findIndex(p => p.id === id);
  if (idx >= 0) {
    projetos[idx] = { ...projetos[idx], ...dados };
    return projetos[idx];
  }
  return null;
};
export const deleteProjeto = (id: number) => {
  projetos = projetos.filter(p => p.id !== id);
  return true;
};