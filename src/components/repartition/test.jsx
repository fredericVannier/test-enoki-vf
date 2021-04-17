function Repartition () {
    const assets = DATA_ASSETS;
    const percentageArr = [];
  
    const series = [
      {
        name: "test",
        data: [8, 7, 3],
      },
    ];
    const options = {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  
    const percentageData = assets.map((element) => {
      percentageArr.push((element.quantity * 100) / 50);
    });
  
    return (
      <div className="repartition-container">
        <h4 className="title">Répartition</h4>
        <div className="repartition-content">
          <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" />
          </div>
  
          <RepartitionGraph />
          <ItemPreview />
        </div>
      </div>
    );
  };
  
  export default Repartition;