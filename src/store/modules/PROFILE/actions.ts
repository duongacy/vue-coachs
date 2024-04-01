export const profileActions = {
  async getProfile() {
    console.log('getProfile');
    fetch('http://localhost:1337/api/profile?populate=deep').then(async (rs) => {
      const d = await rs.json();
      console.log(d);

      // console.log(flattenObject(d.data));
    });
  },
};
