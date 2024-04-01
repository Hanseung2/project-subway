package com.example.member.dto;

import com.example.member.entity.MemberEntity;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
// 기본 생성자를 자동으로 만들어준다.
@AllArgsConstructor
// 필드를 매개변수로 하는 생성자를 만들어준다.
public class MemberDTO {
    private Long id;
    private String userId;
    private String userPassword;
    private String userNickname;
    private String userName;
    private String userTelNumber;
    private String userDate;


    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();

        memberDTO.setId(memberEntity.getId());
        memberDTO.setUserId(memberEntity.getUserId());
        memberDTO.setUserPassword(memberEntity.getUserPassword());
        memberDTO.setUserNickname(memberEntity.getUserNickname());
        memberDTO.setUserName(memberEntity.getUserName());
        memberDTO.setUserTelNumber(memberEntity.getUserTelNumber());
        memberDTO.setUserDate(memberEntity.getUserDate());

        return memberDTO;
    }
}
