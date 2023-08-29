/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { StyledModal } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CarContext } from '../../providers/CarContext';
import { TCreateAdData, createAdSchema } from './validator';
import Button from '../Button';
import { api } from '../../services/api';

export function ModalCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateAdData>({ resolver: zodResolver(createAdSchema) });
  const [apiCar, setApiCar] = useState<string[]>([]);
  const [apiModel, setApiModel] = useState<any>();
  const [filteredModel, setFilteredModel] = useState<any[]>([]);
  const [fuelType, setFuelType] = useState('');
  const [inputCount, setInputCount] = useState<string[]>([]);
  const { setOpenCreateModal } = useContext(CarContext)


  useEffect(() => {
    async function getCar() {
      const request = await fetch('https://kenzie-kars.herokuapp.com/cars');
      const response = await request.json();
      setApiCar(Object.keys(response));
    }
    getCar();
  }, []);

  useEffect(() => {
    async function getModel() {
      const request2 = await fetch(
        `https://kenzie-kars.herokuapp.com/cars?brand=${apiCar[0]}`
      );
      const response2 = await request2.json();
      setApiModel(Object.entries(response2));
    }
    getModel();
  }, [apiCar]);

  async function handleBrandChange(e: any) {
    let brand = e.target.value;
    const request = await fetch(
      `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
    );
    const response = await request.json();
    setApiModel(Object.entries(response));
  }

  async function handleModelChange(e: any) {
    let model = e.target.value;
    let currentCar = apiModel.filter((filterModel: any) => {
      return filterModel[1].name == model;
    });
    if (currentCar[0][1].fuel == 1) {
      setFuelType('flex');
    } else if (currentCar[0][1].fuel == 2) {
      setFuelType('hibrido');
    } else {
      setFuelType('eletrico');
    }
    setFilteredModel(currentCar.flat());
  }

  const handleClick = () => {
    setInputCount((prev) => [...prev, 'clicou']);
  };

  const submit = async (data: any) => {
    data.year = filteredModel[1].year;
    data.fuel = fuelType;
    data.kilometers = Number(data.kilometers)
    data.price = Number(data.price)
    /* data.photos = ["https://images.cars.com/in/v2/stock_photos/7f212472-c429-4681-882b-29e52f4d52b5/884b28bd-d67f-4c90-a7e5-a066090db8f7.png?w=1000","https://img.sixt.com/1600/f3f01a1a-cecb-4dc4-a68c-5dc26fadbe37.jpg","https://images.cars.com/in/v2/stock_photos/7f212472-c429-4681-882b-29e52f4d52b5/884b28bd-d67f-4c90-a7e5-a066090db8f7.png?w=1000","https://img.sixt.com/1600/f3f01a1a-cecb-4dc4-a68c-5dc26fadbe37.jpg","https://images.cars.com/in/v2/stock_photos/7f212472-c429-4681-882b-29e52f4d52b5/884b28bd-d67f-4c90-a7e5-a066090db8f7.png?w=1000","https://img.sixt.com/1600/f3f01a1a-cecb-4dc4-a68c-5dc26fadbe37.jpg"] */
    console.log(data);
    const photosGallery = []
    photosGallery.push(data.image)
    
    data.photos = photosGallery
    const token = localStorage.getItem('@TOKEN');    
        
       
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;
        
        if(token){
            try {
              const response = await api.post(`/salesAd`, data);
              console.log(response.data);
                
        } catch (error) {
            console.log(error);
            
        }
      }
  }

  return (
    <StyledModal>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='modal-title'>
            <h3>Criar Anúncio</h3>
            <button onClick={() => setOpenCreateModal(false)}>X</button>
          </div>
          <h4>Informações do veículo</h4>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor='brand'>Marca</label>
            <select
              id='brand'
              {...register('brand')}
              onChange={handleBrandChange}
            >
              {apiCar.map((car, index) => (
                <option key={index}>{car}</option>
              ))}
            </select>
            <p>{errors.brand?.message}</p>

            <label htmlFor='model'>Modelo</label>
            <select
              id='model'
              {...register('model')}
              onChange={handleModelChange}
            >
              {apiModel &&
                apiModel.map((model: any, index: number) => (
                  <option key={index}>{model[1].name}</option>
                ))}
            </select>
            <p>{errors.model?.message}</p>

            <div className='div-teste'>
              <div className='div-filha'>
                <label htmlFor='year'>Ano</label>
                <input
                  id='year'
                  defaultValue={
                    filteredModel.length > 0 ? filteredModel[1].year : ''
                  }
                  {...register('year')}
                  readOnly
                />
                {/* {
                                    filteredModel.length >0 && <input defaultValue={filteredModel[0][1].year}
                                    readOnly
                                    {...register("year")}
                                    />
                                } */}
                <p>{errors.year?.message}</p>
              </div>
              <div className='div-filha'>
                <label htmlFor='fuel'>Combustivel</label>
                <input
                  id='fuel'
                  {...register('fuel')}
                  defaultValue={fuelType}
                  readOnly
                />
                <p>{errors.fuel?.message}</p>
              </div>
            </div>
            <div className='div-teste'>
              <div className='div-filha'>
                <label htmlFor='kilometers'>Quilometragem</label>
                <input id='kilometers' {...register('kilometers')} />
                <p>{errors.kilometers?.message}</p>
              </div>
              <div className='div-filha'>
                <label htmlFor='color'>Cor</label>
                <input id='color' {...register('color')} />
                <p>{errors.color?.message}</p>
              </div>
            </div>
            <div className='div-teste'>
              <div className='div-filha'>
                <label htmlFor='fipe'>Preço tabela FIPE</label>
                <input
                  id='fipe'
                  defaultValue={
                    filteredModel.length > 0 ? filteredModel[1].value : ''
                  }
                  readOnly
                />
              </div>
              <div className='div-filha'>
                <label htmlFor='price'>Preço</label>
                <input id='price' {...register('price')} />
                <p>{errors.price?.message}</p>
              </div>
            </div>

            <label htmlFor='description'>Descrição</label>
            <input id='description' {...register('description')} />
            <p>{errors.description?.message}</p>

            <label htmlFor='image'>Imagem da capa</label>
            <input id='image' {...register("image")} placeholder='é esse aqui'/>

            {inputCount.length > 0 &&
              inputCount.map((_, index) => {
                return (
                  <React.Fragment>
                    <label htmlFor='image'>
                      {index + 1}ª imagem da galeria
                    </label>
                    <input
                      placeholder='https://image.com'
                      
                      />
                      {/* <p>{errors.photos?.message}</p> */}
                  </React.Fragment>
                );
              })}

            <div className='box-btn-addImgGal'>
              <Button
                onClick={handleClick}
                name='Adicionar campo para imagem da galeria'
                variant='addImgGallery'
              />
            </div>

            <div className='div-buttons'>
              <button onClick={() => setOpenCreateModal(false)} type='button'>
                Cancelar
              </button>
              <button type='submit'>Criar Anuncio</button>
            </div>
          </form>
        </div>
      </div>
    </StyledModal>
  );
}
