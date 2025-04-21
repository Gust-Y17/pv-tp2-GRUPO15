const paisSelect = document.getElementById('pais');
    const capitalSelect = document.getElementById('capital');

    const paisesYCapitales = {
      Argentina: 'Buenos Aires',
      Belice: 'Belmopan',
      Bolivia: 'Sucre',
      Brasilia: 'Brasilia',
      Canadá: 'Ottawa',
      Chile: 'Santiago de Chile',
      Colombia: 'Bogotá',
      CostaRica: 'San José',
      Ecuador: 'Quito',
      ElSalvador: 'San Salvador',
      Usa: 'Washington D.C',
      Guatemala: 'Ciudad de Guatemala',
      Honduras: 'Tegucigalpa',
      México: 'Ciudad de Mexico',
      Nicaragua: 'Managua',
      Panamá: 'Ciudad de Panamá',
      Paraguay: 'Asunción',
      Perú: 'Lima',
      Surinam: 'Paramaribo',
      TrinidadYTobago: 'Puerto España',
      Uruguay: 'Montevideo',
      Venezuela: 'Caracas',
    };

    paisSelect.addEventListener('change', () => {
      const paisSeleccionado = paisSelect.value;

      if (paisSeleccionado === "") {
        capitalSelect.innerHTML = `<option value="">-- Capital correspondiente --</option>`;
        capitalSelect.disabled = true;
        return;
      }

      const capital = paisesYCapitales[paisSeleccionado];

      capitalSelect.disabled = false;
      capitalSelect.innerHTML = `<option value="${capital}">${capital}</option>`;

      console.log(`País seleccionado: ${paisSeleccionado}`);
      console.log(`Capital correspondiente: ${capital}`);
    });