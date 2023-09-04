import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

type IPropLogin = {};

export default function Login({}: IPropLogin) {
    return (
        <div
            style={{ backgroundColor: 'rgb(250, 250, 250, 0.1)' }}
            className="p-4 w-80 h-96 shadow-xl"
        >
            <h1 className="text-2xl font-semibold text-main text-center mb-4">
                Login
            </h1>

            <form className="grid grid-rows-[1fr, 1fr, 100px] gap-y-5">
                <div className="w-full flex flex-col gap-y-4">
                    <Input type="text" />

                    <Input type="password" />

                    <a>
                        <span className="self-end text-main font-normal">
                            Esqueceu a Senha?
                        </span>
                    </a>

                    <Button
                        type="submit"
                        className="w-full h-10 text-center bg-blue-400 uppercase tracking-wide text-xl text-main rounded-md"
                    >
                        LOGAR
                    </Button>
                </div>

                <div className="w-full text-center">
                    <span className="text-main">Ou Logue com</span>
                    <div className="flex gap-x-2 mt-4">
                        <Button className="bg-blue-800 w-full text-main flex-1 h-12 rounded-md">
                            Facebook
                        </Button>
                        <Button className="bg-pink-800 flex-1 h-12 rounded-md text-main">
                            Instragram
                        </Button>
                    </div>
                </div>

                <span className="text-main text-center text-base">
                    Não tem uma conta?{' '}
                    <a className="text-blue-700 text-base" href="">
                        Cadastre-se
                    </a>
                </span>
            </form>
        </div>
    );
}
