package com.example.member.service;

import com.example.member.dto.MemberDTO;
import com.example.member.entity.MemberEntity;
import com.example.member.Repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service //스프링이 관리해주는 객체 == 스프링 빈
@RequiredArgsConstructor
public class MemberService {


    private final MemberRepository memberRepository;

    public void save(MemberDTO memberDTO) {
        // 1. dto -> entity 변환
        // 2. repository의 save 메서드 호출
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);
        // repository의 save메서드 호출 (조건. entity객체를 넘겨줘야 함)
    }

    public MemberDTO login(MemberDTO memberDTO) {

         /*
            1. 회원이 입력한 아이디를 DB에서 조회
            2. DB에서 조회한 아이디의 비밀번호와 사용자가 입력한 비밀번호가 일치한지 판단
         */
        Optional<MemberEntity> byUserId = memberRepository.findByUserId(memberDTO.getUserId());

        if (byUserId.isPresent()) {
            // 조회 결과가 있다(해당 이메일을 가진 회원 정보가 있다)
            System.out.println("아이디 존재");
            MemberEntity memberEntity = byUserId.get();
            if (memberEntity.getUserPassword().equals(memberDTO.getUserPassword()))
            {
                // 비밀번호 일치
                // entity -> dto 변환 후 리턴
                System.out.println("비번 일치");
                MemberDTO dto = MemberDTO.toMemberDTO(memberEntity);
                return dto;
            }
            else
            {
                System.out.println("비번 불일치");
                // 비밀번호 불일치(로그인실패)
                return null;
            }
        }
        else {
            System.out.println("아이디 존재X");
            // 조회 결과가 없다(해당 이메일을 가진 회원이 없다)
            return null;
        }
    }

    public List<MemberDTO> findAll() {
        List<MemberEntity> memberEntityList = memberRepository.findAll();
        List<MemberDTO> memberDTOList = new ArrayList<>();
        for (MemberEntity memberEntity: memberEntityList) {
            memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
//            MemberDTO memberDTO = MemberDTO.toMemberDTO(memberEntity);
//            memberDTOList.add(memberDTO);
        }
        return memberDTOList;
    }
}
