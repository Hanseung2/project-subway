package com.example.member.entity;

import com.example.member.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name = "member_table") //database에 해당 이름의 테이블 생성
public class MemberEntity {//table 역할
    //jpa ==> database를 객체처럼 사용 가능


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true)
    private String userId;

    @Column(unique = true)
    private String userNickname;

    @Column(unique = true)
    private String userTelNumber;

    @Column
    private String userPassword;
    @Column
    private String userName;
    @Column
    private String userDate;


    public static MemberEntity toMemberEntity(MemberDTO memberDTO) {
        MemberEntity memberEntity = new MemberEntity();

        memberEntity.setId(memberDTO.getId());
        memberEntity.setUserId(memberDTO.getUserId());
        memberEntity.setUserPassword(memberDTO.getUserPassword());
        memberEntity.setUserNickname(memberDTO.getUserNickname());
        memberEntity.setUserName(memberDTO.getUserName());
        memberEntity.setUserTelNumber(memberDTO.getUserTelNumber());
        memberEntity.setUserDate(memberDTO.getUserDate());;
        return memberEntity;
    }


}
