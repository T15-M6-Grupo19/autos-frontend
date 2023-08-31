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
    setInputCount((prev) => [...prev, 'insira nova imagem']);
  };


  const submit = async (data: any) => {
    data.year = filteredModel[1].year;
    data.fuel = fuelType;
    data.kilometers = Number(data.kilometers)
    data.price = Number(data.price)
    const photoArr = []
    photoArr.push(data.photos)
    if(data.morePhotos.length >0){
      data.morePhotos.forEach((photo:any)=>{
        photoArr.push(photo)
      })
    }
    data.photos = photoArr
    
    try {
        const response = await api.post(`/salesAd`, data);
        setOpenCreateModal(false)
        window.location.reload()
                
    } catch (error) {
        console.log(error);
            
    }
  }

  if(apiCar[0] !== "Selecione a marca"){
    apiCar[0] = "Selecione a marca"
  }

    

  return (
    <StyledModal>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='modal-title'>
            <h3>Criar Anúncio</h3>
            <button className='close-button' onClick={() => setOpenCreateModal(false)}>X</button>
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

            <label htmlFor='photos'>Imagem da capa</label>
            <input id='photos' {...register("photos")} placeholder='insira a imagem de capa aqui'/>
            <p>{errors.photos?.message}</p>

            {inputCount.length > 0 &&
              inputCount.map((_, index) => {
                return (
                  <React.Fragment>
                    <label htmlFor='image'>
                      {index + 1}ª imagem da galeria
                    </label>
                    <input
                      placeholder='https://image.com'
                      {...register(`morePhotos.${index}`)}
                      />
                      <p>{errors.morePhotos?.message}</p>
                      
                    
                      
                  </React.Fragment>
                );
              })}

            <div className='box-btn-addImgGal'>
              <Button
                type='button'
                onClick={handleClick}
                name='Adicionar campo para imagem da galeria'
                variant='addImgGallery'
              />
            </div>

            <div className='div-buttons'>
              <button onClick={() => setOpenCreateModal(false)} type='button'>
                Cancelar
              </button>
              <button className='create-button' type='submit'>Criar Anuncio</button>
            </div>
          </form>
        </div>
      </div>
    </StyledModal>
  );
}
