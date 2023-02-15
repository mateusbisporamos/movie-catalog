import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"

import Logo from "../img/logo.svg" 

import * as S from "../style/header"

const Header = () => {
    return(
        <S.Container>
            <Link to="/"> <img src={Logo} alt="Logo"/> </Link>

            <S.SearchBar>
                <S.SearchInput type="text" placeholder="Search" />
                <S.SearchButton> <FaSearch /> </S.SearchButton>
            </S.SearchBar>
        </S.Container>
    )
}

export default Header