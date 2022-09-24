class ServiceCar{
    getCar(){
        return [
            {
                'Company' : 'Honda',
                'Modal' : 'City',
                'Price' : '100000',
                'Color' : 'Blue'
            },
            {
                'Company' : 'Tesla',
                'Modal' : 'Modal X',
                'Price' : '1000000',
                'Color' : 'Red'
            },
            {
                'Company' : 'Toyota',
                'Modal' : 'grande',
                'Price' : '500000',
                'Color' : 'Black'
            }
        ]
    }
}
const Service = new ServiceCar();
export default Service;