export const headerTitle = (path) => {
  const tileByPath = {
    '/account': 'Minha conta',
    '/account/statistics': 'Estatísticas',
    '/account/post': 'Poste sua foto'
  };

  return tileByPath[path];
};
